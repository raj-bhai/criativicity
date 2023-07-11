export const loadBillDeskSDK = () => {
    const script1 = document.createElement('script');
    script1.src = 'https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.esm.js';
    script1.type = 'module';
    document.head.appendChild(script1);
  
    const script2 = document.createElement('script');
    script2.src = 'https://uat.billdesk.com/jssdk/v1/dist/billdesksdk.js';
    script2.nomodule = true;
    document.head.appendChild(script2);
  
    const link = document.createElement('link');
    link.href = 'https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  };
  