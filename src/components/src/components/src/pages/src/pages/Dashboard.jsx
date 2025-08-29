export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-xl font-bold mb-6">لوحة التحكم</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold">عدد العملاء</h4>
          <p className="text-3xl mt-2">10</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold">المنشورات المجدولة</h4>
          <p className="text-3xl mt-2">45</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold">المنشورات الناجحة</h4>
          <p className="text-3xl mt-2">42</p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h4 className="text-lg font-semibold mb-4">آخر المنشورات</h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
              F
            </div>
            <div>
              <p className="font-medium">مطعم سما</p>
              <p className="text-sm text-gray-500">نشر منذ 2 ساعات</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
              I
            </div>
            <div>
              <p className="font-medium">شركة النور</p>
              <p className="text-sm text-gray-500">نشر منذ 5 ساعات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
