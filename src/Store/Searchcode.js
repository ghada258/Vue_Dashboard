import { computed } from "vue"

export function useFilterCode(productStore,searchterm,fields,filter){
    
 return computed(()=>{
        const serachtext=searchterm.value.trim().toLowerCase()
        const filtertext=filter?.value.trim()
        if(!serachtext&&!filtertext){
          return productStore
        }
    
 let result=[...productStore]
 if(filtertext){
  result=result.filter(itm=> itm.Status===filtertext||itm.Category===filtertext)
}
if(serachtext){
if(/^\d+$/.test(serachtext)){
  return result.filter(itm=>
       [itm.Stock,itm.Price,itm.Total_Price].some(num=>String(num).toLowerCase().startsWith(serachtext))   

)}
      const re=new RegExp(`\\b${serachtext}`,'i')
    return result.filter(item=>{
          const  allvalue=fields.map(v=>String(item[v]||'').toLowerCase()).join(' ')
      
          return  re.test(allvalue)
        })
}
return result

})

}