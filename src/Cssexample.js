import styles from './Cssexample.module.css';
function Header(){
    /*const stylevar ={
        color: 'red',
        width:'100%',
        backgroundColor:'gray'
    }*/
    return(
    <>
         <h2 className={styles.heading}>Hello everyone</h2>
         <p>paragraph tag</p>
    </>
    );
}

export default Header;