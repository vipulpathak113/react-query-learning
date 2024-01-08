## React Query

- By default ***cacheTime*** is 5 min but we can change it by passing 3rd argument in useQuery with an object with key ***cacheTime*** and value as its cache time.

  So, ***loading*** will be true on first visit but on other visits it will be false. Also if data changes then it is fetched in the background and will be displayed after getting the new data. So ***isFetching*** will be true on first as well as other visits.
- By default ***staleTime*** is 0 but we can change it by passing 3rd argument in useQuery with an object with key ***staleTime*** and value as its cache time. 
  
  So, if ***staleTime*** is set for 30sec then it means on first visit api will be fetched and if we do another visit within 30sec then api will be not fetched and stale data will be displayed and ***isFetching*** will be false.
- By default ***refetchOnMount*** is true but we can change it by passing 3rd argument in useQuery with an object with key ***refetchOnMount*** and value as true/false/always.
  
  So, if ***refetchOnMount*** is true it means api will be fetched on every visit. but if it is set to false it means api will be fetched on first visit but will not be fetched on other visits.

- By default ***refetchOnWindowFocus*** is true but we can change it by passing 3rd argument in useQuery with an object with key ***refetchOnWindowFocus*** and value as true/false/always.
  
  So, if ***refetchOnWindowFocus*** is true it means api will be fetched on everytime we lose focus on given page window. but if it is set to false it means api will be fetched on first visit but will not be fetched on other visits.  

- By default ***refetchInterval*** is false but we can change it by passing 3rd argument in useQuery with an object with key ***refetchInterval*** and value as false or value in miliseconds.
  
  So, if ***refetchInterval*** is false it means api will be fetched on normally but if it is set to any value like 2sec it means api will be fetched every 2 seconds. This concept is called **polling**.

  But it will not refetch if window is not in focus so we can set ***refetchIntervalInBackground***  to true so that it can refetch even if window is not in focus.