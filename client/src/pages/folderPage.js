import { useEffect } from "react";
import Folder from "../components/EditFolder";
import {useParams} from "react-router-dom";
import EditFolder from "../components/EditFolder";


export default function FolderPage(){

    const {folderId} = useParams();

   

    return <EditFolder folderId={folderId}/>

}