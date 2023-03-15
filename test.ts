// 刷新一次添加一条数据 刷新次数和时间
const getDate=(time?:Date | string):string=>{
  if (!time)   time = new Date()
  if (typeof time === 'string') time= new Date(time)
 let h=time.getHours()
 let m=time.getMinutes()
 let s=time.getSeconds()
return `${h}:${m}:${s}`
}

type Item ={
  count:number,
  time: string
}
type List =Array<Item>
const localStorageKey = 'jia'
const getList=():List=>{
  let local =localStorage.getItem(localStorageKey) || '[]'
  let localObj = JSON.parse(local) as List
  return localObj
}

const upDataList=():List=>{
  let list = getList()
  let last = list[list.length-1]
  list.push({
    count:last? last.count+1 : 1,
    time:getDate()
  })
  localStorage.setItem(localStorageKey,JSON.stringify(list))
  return list
}

const render = () => {
  upDataList();
  
  const data = getList()
  const app = document.querySelector("#app") as HTMLDivElement;
  app.innerHTML = data
    .map((item) => `次数：${item.count}，时间：${item.time}`)
    .join("<br/>");
};

render();