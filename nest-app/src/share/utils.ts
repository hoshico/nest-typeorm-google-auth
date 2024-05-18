// 誕生日から年齢算出
export const calculateAge = (birthday: Date) => {
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
};

// 日付: string → date変換
export const convertIso8601toDate = (stringDate: string) => {
  return new Date(stringDate);
};
