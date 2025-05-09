import { computed } from 'vue';

export function useFilterCode(sourceData, searchterm, fields) {
  return computed(() => {
    const serachtext = searchterm.value.trim().toLowerCase();
    console.log(serachtext);
    const result = [...sourceData.value]; // data copy

    console.log(result);
    console.log(searchterm);
    console.log(fields[1]);

    if (!serachtext) {
      return sourceData.value;
    }
    if (searchterm) {
      //  هلف علي الداتا  اللي هي المنتجات واخد منها الفيلد وبعدين اعمل  check
      return result.filter(item => {
        const allvalue = fields
          .map(field => {
            let value = item[field];
            if (value && typeof value === 'object') {
              return String(value.name).toLowerCase();
            }

            return String(value || '').toLowerCase();
          })
          .join(' ');
        return allvalue.includes(serachtext);
      });
    }
  });
}
