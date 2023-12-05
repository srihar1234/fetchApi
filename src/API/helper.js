import { Api } from "./Api"

export async function getAllDoctor() {
  const res = await fetch(Api, {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
  return data;
}

export async function editContact(id,editCon){
  const res = await fetch(`${Api}/${id}`,{
    method:"PUT",
    body:JSON.stringify(editCon),
    headers:{
      "content-type":"application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function deleteContact(id){
  const res = await fetch(`${Api}/${id}`,{
    method:"DELETE",
    headers:{
      "content-type":"application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function addNewContact(newCon){
  const res = await fetch(Api,{
    method:"POST",
    body:JSON.stringify(newCon),
    headers:{
      "content-type":"application/json",
    },
  });
  const data = await res.json();
  return data;
}
