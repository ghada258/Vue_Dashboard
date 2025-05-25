import { computed } from "vue"

export function useFilterCode(productStore,searchterm,fields,filter){
    
 return computed(()=>{
          const products = productStore.value || []

        const serachtext=searchterm.value.trim().toLowerCase()
        const filtertext=filter?.value.trim().toLowerCase()
        if(!serachtext&&!filtertext){
          return products
        }
    if (!txt && !filtertext) {
      return products
    }
 let result=[...products]
 if(filtertext){
  result = result.filter(item =>
    String(item.status || '')
      .toLowerCase() === filtertext
  )}
if(serachtext){
      const re=new RegExp(`\\b${serachtext}`,'i')
    return result.filter(item=>{
          const  allvalue=fields.map(v=>String(item[v]||'').toLowerCase()).join(' ')
      
          return  re.test(allvalue)
        })
}
return result

})

}