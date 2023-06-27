import axios from "axios";

const HTTP = axios.create({
    baseURL : "http://localhost:4000"
});


// user functions
export async function login(formData){
    return await HTTP.post("/users/login" , formData);
}

export async function register(formData){
    return await HTTP.post("/users/register" , formData);
}

export async function getFolders(id){
    return await HTTP.get(`/users/getFolders/${id}`);
}

// Folders functions
export async function getAllFolders(){
    return await HTTP.get("/folders/getAll");
}

export async function addFolder(formData){
    return await HTTP.post("/folders/add" , formData);
}

export async function updateFolder(formData){
    return await HTTP.put("/folders/update" , formData);
}

export async function getCards(folderId){
    return await HTTP.get(`/users/getFolders/${folderId}`);
}

export async function removeFolder(folderId){
    return await HTTP.delete(`/folders/remove/${folderId}`);
}

// Card functions

export async function addCard(formData){
    return await HTTP.post("/cards/add" , formData);
}

export async function updateCard(formData){
    return await HTTP.post("/cards/update" , formData);
}


