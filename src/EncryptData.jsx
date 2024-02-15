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