"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. تعريف "مخزن الهوية" (Theme Context)
// هذا الجزء هو المسؤول عن توزيع الألوان والإعدادات على كل صفحات الموقع
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => { },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');

  // 2. ضمان أن الكود يعمل فقط بعد تحميل المتصفح (لمنع أخطاء التزامن)
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // إذا لم يتم تحميل المكون بعد، نعرض المحتوى ببساطة لتجنب تعليق الواجهة
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {/* هذا القسم هو الذي يحيط بكل ملفات الـ app ويمنحها التنسيق الموحد */}
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

// 3. أداة الاستخدام (Hook) لاستدعاء الثيم في أي صفحة أخرى
export const useTheme = () => useContext(ThemeContext);