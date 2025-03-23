export default function handler(req, res) {
    const { id } = req.query;
  
    if (id !== '1') {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
  
    const user = {
      name: "Alejandro",
      lastName: "Riveros",
      email: "alejandroriso@unisabana.edu.co",
      id: "0000320640"
    };
  
    res.status(200).json(user);
  }
  