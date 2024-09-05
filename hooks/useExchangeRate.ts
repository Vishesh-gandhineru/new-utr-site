// "use client"

// import { useState, useEffect } from 'react';
// import axios from 'axios';



// const useExchangeRate = (base : string, target : string) => {
//   const [exchangeRate, setExchangeRate] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRate = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `https://api.exchangerate-api.com/v4/latest/${base}`
//         );
//         const rate = response.data.rates[target];
//         setExchangeRate(rate);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch exchange rate');
//         setLoading(false);
//       }
//     };

//     fetchExchangeRate();
//   }, [base, target]);

//   const convert = (amount) => {
//     if (!exchangeRate) return null;
//     return (amount * exchangeRate).toFixed(2);
//   };

//   return { convert, loading, error };
// };

// export default useExchangeRate;