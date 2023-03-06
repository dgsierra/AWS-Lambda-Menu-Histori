import  { useGetUserQuery } from '../redux/user'

export const useFetchUserDataById = (id) => {
  const { data, isLoading } = useGetUserQuery(id)
  console.log("FROM HOOK MAMALON", data)
  return { data, isLoading }
}
