import { computed, ref } from "vue"

export function pagination(filterorder,numb){
    const page=ref(1)// page start 
    const itemperpage=numb
    const totalpage=computed(()=>{
     return Math.ceil(filterorder.value.length/itemperpage)
    })
    const paginationitem=computed(()=>{
     const start=(page.value-1)*itemperpage;
     const end=start+itemperpage
     return filterorder.value.slice(start,end)
    })
    return{totalpage,page,itemperpage,paginationitem}
}