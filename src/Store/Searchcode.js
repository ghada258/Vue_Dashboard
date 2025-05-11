import { computed } from 'vue';

export function useFilterCode(sourceData, searchTerm, fields) {
  return computed(() => {
    // نص البحث محوّل لصغير وبدون مسافات زايدة
    const searchText = searchTerm.value.trim().toLowerCase();

    // لو مفيش نص بحث، رجّع البيانات كاملة
    if (!searchText) {
      return sourceData.value;
    }

    // فلترة العناصر على حسب الحقول المحددة
    return sourceData.value.filter(item => {
      // نجمع قيم الحقول كلها في سترينج واحد
      const combined = fields
        .map(field => {
          const val = item[field];
          // لو القيمة object و فيها name
          if (val && typeof val === 'object') {
            return String(val.name).toLowerCase();
          }
          return String(val || '').toLowerCase();
        })
        .join(' ');

      // نرجّع العنصر لو السترينج المشترك يحتوي نص البحث
      return combined.includes(searchText);
    });
  });
}
