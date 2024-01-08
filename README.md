## React Query

- By default ***cacheTime*** is 5 min but we can change it by passing 3rd argument in useQuery with an object with key ***cacheTime*** and value as its cache time.

  So, ***loading*** will be true on first visit but on other visits it will be false. Also if data changes then it is fetched in the background and will be displayed after getting the new data. So ***isFetching*** will be true on first as well as other visits.
- By default ***staleTime*** is 0 but we can change it by passing 3rd argument in useQuery with an object with key ***staleTime*** and value as its cache time. 
  
  So, if ***staleTime*** is set for 30sec then it means on first visit api will be fetched and if we do another visit within 30sec then api will be not fetched and stale data will be displayed.