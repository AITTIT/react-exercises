import { useState } from 'react';
import { submitFeedback } from '../services/api';

export default function FeedbackForm() {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] =  useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [responseId, setResponseId] = useState<number | null>(null);
  const [error, setError] = useState<string>('');


  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError('');

    try {
      const data = await submitFeedback({
        title,
        body: message,
        userId: 1
      });

      setResponseId(data.id);
      setIsSubmitted(true);
      setTitle('');
      setMessage('');
    } catch (err: any) {
      setError(err.message ?? 'Something went wrong');
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto mt-10 font-sans">

      {isSubmitted ? (
        <div className='bg-green-300 text-green-700 px-4 py-2 rounded flex flex-col items-center'>
          <span className='font-bold'>Thank you for your feedback!</span>
          <span> Your message was saved with ID: {responseId} </span>
        </div>
        
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-lg border text-center">
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-white p-8 rounded-xl'>
            <h2 className="text-2xl font-bold mb-2 text-center">Give Feedback</h2>
            <input 
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border p-2 rounded'
              required
            />
            <textarea
              placeholder='Write your message here...'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='border p-2 rounded'
              rows={5}
            />
            {error && <p className='text-red-500 text-sm font-bold'>{error}</p>}
            <button type="submit" className="bg-blue-600 text-white p-2 rounded font-bold">
              Submit Feedback
            </button>
          </form>
        </div>
      )}
      </div>
  );
}