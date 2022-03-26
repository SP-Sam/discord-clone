import { useRouter } from 'next/router';

function LogoutButton() {
  const router = useRouter();

  return (
    <>
      <button
        className="logout-button"
        onClick={() => router.push('/')}
      >
        Logout
      </button>

      <style jsx>{`
          .logout-button {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid white;
            border-radius: 0.4rem;
            width: 5rem;
            height: 2rem;
            color: white;
            background-color: #3F3545;
            font-weight: bold;
          }
          
          .logout-button:hover {
            color: #3F3545;
            background-color: white;
            transition: 0.2s;
            cursor: pointer; 
          }
        `}</style>
    </>
  )
}

export default LogoutButton