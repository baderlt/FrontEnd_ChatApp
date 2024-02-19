import CryptoJS from 'crypto-js';
 export const decryptData = (encryptedData) => {
    try {
       
      const bytes = CryptoJS.AES.decrypt(encryptedData, 'FgK@jsBADER&122003%04');
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      let decryptedData_=JSON.parse(decryptedData);
      return decryptedData_;
    } catch (error) {
      // console.error('Decryption Error:', error);
      return 'Decryption failed';
    }
  };

export const encryptData=(data)=>{
  try{

    const dataToEncrypt = JSON.stringify(data);
    const encryptedData = CryptoJS.AES.encrypt(dataToEncrypt, "FgK@jsBADER&122003%04").toString();
    return encryptedData;

  
  }catch(error){
    console.log('encryption error failed to encrypt data')
  }


}  