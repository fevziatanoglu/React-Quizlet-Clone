import {useParams} from "react-router-dom";
import EditFolder from "../components/folder/EditFolder";


export default function FolderPage(){

    const {folderId} = useParams();

   

    return <EditFolder folderId={folderId}/>

}