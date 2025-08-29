export default function Login() {
  const handleLogin = () => {
    localStorage.setItem('smams_token', 'fake-jwt-token');
    window.location.href = '/';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">تسجيل الدخول</h2>
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded font-medium transition"
        >
          دخول بالحساب الداخلي
        </button>
      </div>
    </div>
  );
}
