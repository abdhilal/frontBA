// hooks/useProduct.js
import { useState, useEffect } from "react";
import axios from "axios"; // أو استيراد apiClient إذا كنت تستخدمه مع baseURL
// import apiClient from '../services/api-client'; // إذا كنت تستخدم apiClient مهيأ

export const useProduct = () => {
  const [data, setData] = useState([]);      // لتخزين بيانات المنتجات
  const [loading, setLoading] = useState(true); // للإشارة إلى حالة التحميل
  const [error, setError] = useState(null);    // لتخزين أي أخطاء تحدث

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // ابدأ التحميل
        setError(null);   // امسح الأخطاء السابقة

        // استخدام axios لجلب البيانات
        // إذا كان apiClient الخاص بك مهيأ بـ baseURL: "http://localhost:8001"
        // فاستخدم: const response = await apiClient.get('/products');
        const response = await axios.get('http://localhost:8001/products'); //

        setData(response.data); // تحديث حالة البيانات
        console.log("Products fetched successfully:", response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err); // تحديث حالة الخطأ
      } finally {
        setLoading(false); // إنهاء التحميل سواء نجح أو فشل
      }
    };

    fetchProducts(); // استدعاء دالة الجلب عند تحميل المكون لأول مرة
  }, []); // [] تعني أن التأثير سيتم تشغيله مرة واحدة فقط عند تحميل المكون

  // إرجاع حالة البيانات والتحميل والخطأ
  return { data, loading, error };
};