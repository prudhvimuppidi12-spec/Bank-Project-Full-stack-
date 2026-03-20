import { useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 Welcome to MyBank!", bot: true }
  ]);
  const [input, setInput] = useState("");

  const getReply = (msg) => {
  msg = msg.toLowerCase();

  const qa = [
    { q: ["balance", "check balance"], r: "💰 You can check your balance in Dashboard." },
    { q: ["deposit"], r: "💵 Go to Dashboard and click Deposit." },
    { q: ["withdraw"], r: "💸 Use Withdraw option in Dashboard." },
    { q: ["transfer"], r: "🔄 Go to Transfer page to send money." },
    { q: ["kyc"], r: "🪪 Complete your KYC in KYC section." },
    { q: ["loan"], r: "🏦 Apply for loans in Loans page." },
    { q: ["emi"], r: "📊 EMI depends on loan amount and duration." },
    { q: ["interest"], r: "📈 Interest rates vary based on loan type." },
    { q: ["account"], r: "🏦 Your account details are in Dashboard." },
    { q: ["transactions"], r: "📄 View all transactions in Transactions page." },
    { q: ["history"], r: "📜 Your transaction history is available in Transactions section." },
    { q: ["login"], r: "🔐 Enter your email and password to login." },
    { q: ["register"], r: "📝 Fill the registration form to create account." },
    { q: ["password"], r: "🔑 Keep your password secure and private." },
    { q: ["forgot password"], r: "⚠️ Password reset feature coming soon." },
    { q: ["email"], r: "📧 Please use a valid email address." },
    { q: ["pan"], r: "🪪 PAN is required for KYC verification." },
    { q: ["aadhaar"], r: "🪪 Aadhaar is required for KYC verification." },
    { q: ["card"], r: "💳 Card services will be available soon." },
    { q: ["credit card"], r: "💳 Credit card feature coming soon." },
    { q: ["debit card"], r: "💳 Debit card feature coming soon." },
    { q: ["support"], r: "📞 Contact support@mybank.com" },
    { q: ["help"], r: "🙋 I can help you with banking queries." },
    { q: ["security"], r: "🔒 Your account is secured with encryption." },
    { q: ["safe"], r: "🔐 Never share your credentials." },
    { q: ["bank"], r: "🏦 MyBank provides secure banking services." },
    { q: ["open account"], r: "📝 Register to open a new account." },
    { q: ["close account"], r: "⚠️ Contact support to close account." },
    { q: ["minimum balance"], r: "💰 Minimum balance depends on account type." },
    { q: ["maximum transfer"], r: "🔄 Transfer limits will be updated soon." },
    { q: ["upi"], r: "📱 UPI feature coming soon." },
    { q: ["net banking"], r: "🌐 You are using net banking system now." },
    { q: ["mobile banking"], r: "📱 Mobile banking supported." },
    { q: ["branch"], r: "🏦 This is a digital bank." },
    { q: ["ifsc"], r: "🏦 IFSC details coming soon." },
    { q: ["swift"], r: "🌍 SWIFT transfers coming soon." },
    { q: ["charges"], r: "💸 Charges depend on services." },
    { q: ["fees"], r: "💸 Minimal fees applied." },
    { q: ["tax"], r: "📊 Taxes depend on regulations." },
    { q: ["gst"], r: "📊 GST applicable where needed." },
    { q: ["reward"], r: "🎁 Rewards feature coming soon." },
    { q: ["cashback"], r: "💰 Cashback offers coming soon." },
    { q: ["offers"], r: "🎉 Check Offers section soon." },
    { q: ["loan status"], r: "📊 Loan status visible in Loans page." },
    { q: ["apply loan"], r: "🏦 Apply loan in Loans section." },
    { q: ["loan approval"], r: "⏳ Approval depends on eligibility." },
    { q: ["limit"], r: "📊 Limits vary based on account." },
    { q: ["blocked"], r: "🚫 Contact support if account is blocked." },
    { q: ["freeze"], r: "❄️ Account freeze requires support help." },
    { q: ["update details"], r: "✏️ Update details in profile section." },
    { q: ["profile"], r: "👤 Profile feature coming soon." },
    { q: ["logout"], r: "🚪 Use logout button in sidebar." },
    { q: ["hi", "hello", "hey"], r: "👋 Hello! How can I help you today?" }
  ];

  for (let item of qa) {
    for (let keyword of item.q) {
      if (msg.includes(keyword)) return item.r;
    }
  }

  return "🤔 Sorry, I didn’t understand. Try asking about balance, transfer, loan, etc.";
};

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { text: input, bot: false },
      { text: getReply(input), bot: true }
    ]);

    setInput("");
  };

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "320px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
            zIndex: 99999  // 🔥 FIX
          }}
        >
          <div style={{ background: "#0d1b2a", color: "white", padding: "10px" }}>
            🤖 MyBank Assistant
          </div>

          <div style={{ height: "250px", overflowY: "auto", padding: "10px" }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.bot ? "left" : "right",
                  margin: "5px"
                }}
              >
                <span
                  style={{
                    background: m.bot ? "#eee" : "#0d6efd",
                    color: m.bot ? "black" : "white",
                    padding: "6px 10px",
                    borderRadius: "10px"
                  }}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          <div className="d-flex p-2">
            <input
              className="form-control me-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-primary" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}

      {/* FLOAT BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#0d6efd",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 99999   // 🔥 VERY IMPORTANT
        }}
      >
        💬
      </div>
    </>
  );
}

export default Chatbot;