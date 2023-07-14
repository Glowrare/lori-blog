import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mondgodb_username}:${process.env.mondgodb_password}@${process.env.mondgodb_clustername}.ew4di.mongodb.net/${process.env.mondgodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: 'Unable to connect to database. Please try again shortly.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: 'Failed to send message to DB.' });
      client.close();
      return;
    }

    client.close();
    res.status(201).json({ message: 'Sucessfully stored message!', message: newMessage });
  }
}

export default handler;
