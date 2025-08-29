import { useState } from 'react';
import api from '../services/api';

export default function SchedulePost() {
  const [formData, setFormData] = useState({
    client_id: '',
    account_id: '',
    content_type: '',
    caption: '',
    hashtags: '',
    media: null,
    scheduled_time: '',
  });

  const clients = [
    { id: 'C001', name: 'شركة النور للتسويق' },
    { id: 'C002', name: 'مطعم سما' },
  ];

  const accounts = [
    { id: 'A001', client_id: 'C001', platform: 'Facebook', username: 'noon.marketing' },
    { id: 'A002', client_id: 'C001', platform: 'Instagram', username: 'noon.marketing' },
    { id: 'A004', client_id: 'C002', platform: 'Facebook', username: 'sama.restaurant' },
  ];

  const contentTypes = ['Post', 'Reel', 'Story', 'Tweet'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, media: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    try {
      await api.post('/schedule', data);
      alert('تم جدولة المنشور بنجاح!');
      setFormData({ ...formData, caption: '', hashtags: '', scheduled_time: '' });
    } catch (error) {
      alert('فشل الجدولة. حاول لاحقًا.');
    }
  };

  const filteredAccounts = accounts.filter(acc => acc.client_id === formData.client_id);

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-6">جدولة منشور جديد</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">العميل</label>
          <select
            name="client_id"
            value={formData.client_id}
            onChange={handleChange}
            className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700"
            required
          >
            <option value="">اختر العميل</option>
            {clients.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">الحساب</label>
          <select
            name="account_id"
            value={formData.account_id}
            onChange={handleChange}
            className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700"
            disabled={!formData.client_id}
            required
          >
            <option value="">اختر الحساب</option>
            {filteredAccounts.map(a => (
              <option key={a.id} value={a.id}>
                {a.username} ({a.platform})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">نوع المحتوى</label>
          <select
            name="content_type"
            value={formData.content_type}
            onChange={handleChange}
            className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700"
            required
          >
            <option value="">اختر النوع</option>
            {contentTypes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">الصورة/الفيديو</label>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">النص</label>
          <textarea
            name="caption"
            value={formData.caption}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700"
            placeholder="اكتب النص هنا..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">الهاشتاقات</label>
          <input
            type="text"
            name="hashtags"
            value={formData.hashtags}
            onChange={handleChange}
            className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700"
            placeholder="#عروض #خصومات"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">الوقت المجدول</label>
          <input
            type="datetime-local"
            name="scheduled_time"
            value={formData.scheduled_time}
            onChange={handleChange}
            className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded font-medium transition"
        >
          جدولة المنشور
        </button>
      </form>
    </div>
  );
}
