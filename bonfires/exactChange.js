function drawer(price, cash, cid) {
  var changeDue = (cash - price) * 100,
      exactChange = [];
      denomQtys = {};
    
      cidTotal = cid.reduce(function(sum, current) {
          current[1] = Math.round(current[1] * 100);
          return sum + current[1];
       },0);
  
  if(cidTotal < changeDue) {return 'Insufficient Funds';}
  if(cidTotal === changeDue) {return 'Closed';}
  
  while(changeDue > 0) {
      while(changeDue >= 10000 && cid[8][1] > 0) {
          changeDue -= 10000;
          cid[8][1] -= 10000;
          denomQtys['ONE HUNDRED'] = 
              (denomQtys['ONE HUNDRED'] || 0) + 10000;
      }
      while(changeDue >= 2000 && cid[7][1] > 0) {
          changeDue -= 2000;
          cid[7][1] -= 2000;
          denomQtys.TWENTY = 
              (denomQtys.TWENTY || 0) + 2000; 
      }
      while(changeDue >= 1000 && cid[6][1] > 0) {
          changeDue -= 1000;
          cid[6][1] -= 1000;
          denomQtys.TEN = 
              (denomQtys.TEN || 0) + 1000; 
      }
      while(changeDue >= 500 && cid[5][1] > 0) {
          changeDue -= 500;
          cid[5][1] -= 500;
          denomQtys.FIVE = 
              (denomQtys.FIVE || 0) + 500; 
      }
      while(changeDue >= 100 && cid[4][1] > 0) {
          changeDue -= 100;
          cid[4][1] -= 100;
          denomQtys.ONE = 
              (denomQtys.ONE || 0) + 100; 
      }
      while(changeDue >= 25 && cid[3][1] > 0) {
          changeDue -= 25;
          cid[3][1] -= 25;
          denomQtys.QUARTER = 
              (denomQtys.QUARTER || 0) + 25; 
      }      
      while(changeDue >= 10 && cid[2][1] > 0) {
          changeDue -= 10;
          cid[2][1] -= 10;
          denomQtys.DIME = 
              (denomQtys.DIME || 0) + 10; 
      }
      while(changeDue >= 5 && cid[1][1] > 0) {
          changeDue -= 5;
          cid[1][1] -= 5;
          denomQtys.NICKEL = 
              (denomQtys.NICKEL || 0) + 5; 
      }
      while(changeDue >= 1 && cid[0][1] > 0) {
          changeDue -= 1;
          cid[0][1] -= 1;
          denomQtys.PENNY = 
              (denomQtys.PENNY || 0) + 1; 
      }      
  }
  
  for (var key in denomQtys) {
      exactChange.push([key, denomQtys[key]/100]);
  }
  return exactChange;
}

// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]

drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);