function CardUI({ user }) {
  return (
    <div className="card bg-primary text-white p-4 shadow">
      <h5><i className="fas fa-credit-card"></i> Debit Card</h5>
      <h3>XXXX XXXX XXXX 1234</h3>
      <p>{user.name}</p>
    </div>
  );
}

export default CardUI;