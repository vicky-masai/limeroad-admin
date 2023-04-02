import React from 'react'
import styles from '@/styles/Home.module.css'
import Side from '@/components/Side'
import axios from 'axios';
import { useRouter } from 'next/router';
const Productlist = ({c}) => {

  const router = useRouter();
  const Dlt = async(id,item)=>{
    // axios.post(`https://alert-seal-bandanna.cyclic.app/deleted`,item)
    // axios.delete(`https://alert-seal-bandanna.cyclic.app/products/${id}`)
      await fetch(`https://alert-seal-bandanna.cyclic.app/products/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            console.log('Product deleted successfully');
          } else {
            throw new Error('Failed to delete product');
          }
        })
        .catch(error => {
          console.error(error);
        });
    
    // router.push("/products");
  router.reload()
  }
  return (
    <>
    <div className={styles.main}>
<Side />
</div>
<div className={styles.list1}>
<table className={styles.list}>
    <thead>
      <tr>
        <th style={{paddingLeft:"20px"}}>SR</th>
        <th >Product name</th>
        <th>Price</th>
        <th >Brand</th>
      <th></th>
      </tr>
    </thead>
    <tbody className={styles.scrl}>

       {c.map((item, index)=>{
      let id = item._id;
      return (
          <tr key={index}>
            <td style={{paddingLeft:"20px"}}>{+index+1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.brand}</td>
            <td className={styles.dlt} onClick={()=>{Dlt(id,item)}}>Delete</td>
          </tr>
      )
    })}
    </tbody>
  </table></div></>
  )
}

export default Productlist

export async function getServerSideProps(context) {
  const response = await axios.get(`https://alert-seal-bandanna.cyclic.app/products`);
  const data = response.data;
  let c = data.slice(0,13)
  return {
    props: {c}, 
  }

}