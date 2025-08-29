import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'الرئيسية', path: '/', icon: '📊' },
  { name: 'جدولة منشور', path: '/schedule', icon: '📅' },
  { name: 'العملاء', path: '/clients', icon: '👥' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-6 text-center border-b dark:border-gray-700">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">SMAMS</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">نظام الإدارة</p>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-sm transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900 ${
              location.pathname === item.path
                ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
