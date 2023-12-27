import React, { createContext,useState ,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CreateType = {
    arrList:list[],
    addList:(list:list)=>void,
    setShowList,
    showList:list,
    deleteList:(id:string)=>void,
    updatList:(list:list)=>void
    
}

type list = {
    title: string,
    contane: string,
    id: string,
    date: string,
}

type typeChildren = {
    children:React.ReactNode
}

const AllData = createContext<CreateType | null>(null)

const KAYLISTS = 'lista'
let idList:number  = 0;
export const  Data1 = ({children}:typeChildren)=>{
    const [arrList,setArrList]=useState<list[] | any>([])
    const [showList,setShowList]=useState<list>({title:'',contane:'',id:'',date:''})

    // A function the delete list 
    const deleteList = async (id:string)=>{
        let arr = arrList
        arr = arr.filter((val) => val.id != id)
        try{
            await AsyncStorage.setItem(KAYLISTS,JSON.stringify(arr))
            saveData(KAYLISTS)

        }
        catch{
            console.log('not ok');   
        }

    }

    // A functuon that updates the list array of the application from the phone's system memory  
     const saveData = async (kay:any)=>{
        try{
            const value1 = await AsyncStorage.getItem(kay);
            idList = JSON.parse(value1).length;
            setArrList(JSON.parse(value1));

        }
        catch{
            console.log('ppp');
        }            
     }
     saveData(KAYLISTS)

     // A function that updates the list in the cell phone's memory
     const addList = async (list:list)=>{
        let temp:list = list
        idList++
        temp.id = String(idList) 
        let arr = [temp,...arrList]
        try{
            await AsyncStorage.setItem(KAYLISTS,JSON.stringify(arr))
            saveData(KAYLISTS)
            setShowList(temp)
        }
        catch{
            console.log('not ok');   
        }

     }

     const updatList = async (list:list) => {
        let arr = arrList
        arr = arr.filter((val) => val.id != showList.id)
        let temp:list = list
        arr = [temp,...arr]
        try{
            await AsyncStorage.setItem(KAYLISTS,JSON.stringify(arr))
            saveData(KAYLISTS)
            setShowList(temp)

        }
        catch{
            console.log('not ok');   
        }

     }
   
      return(
        <AllData.Provider value={{updatList,arrList,addList,setShowList,showList,deleteList}}>{children}</AllData.Provider>
    )
}

export default AllData