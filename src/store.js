console.log('I want the lunch special');


exports publix = (pallet) => {
  const storeXNumber = 156;
  pallet.x += storeXNumber;
  return pallet;
  console.log('Hawaiian buns and hot wings');
};

exports SamsClub = (pallet) => {
  const storeYNumber = 6;
  pallet.y += storeXNumber;
  console.log('Extra food');
};

exports familyDollar = (cancelShop) => {
  const openingDay = cancelShop;
  // const rivalPublix = this.publix(openingDay);
  // const rivalPublix = this.publix(openingDay)

  return this.SamsClub(this.publix(openingDay));
  console.log('You can buy a brisk');
};
