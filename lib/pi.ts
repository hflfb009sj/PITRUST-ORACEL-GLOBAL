// تعريف واجهة محرك Pi لضمان توافق TypeScript
export const ADMIN_WALLET = "GBXO3576YTVHKCJHRRUSQEKB4YQFBQALTPO2ETG5XQDOI62HJLUON7IT";

export const getPiProvider = () => {
  if (typeof window !== "undefined" && (window as any).Pi) {
    return (window as any).Pi;
  }
  return null;
};

// دالة التحقق من أن المستخدم يفتح التطبيق من داخل متصفح Pi
export const isPiBrowser = () => {
  return typeof window !== "undefined" && (window as any).Pi;
};