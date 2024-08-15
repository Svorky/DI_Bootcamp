interface UserCardProps {
    name?: string,
    age?: number
}

const UserCard = ({name, age}: UserCardProps) => {
  return (<>
    <div>UserCard of {name || 'John'}</div>
    <p>Age {age || 0}</p>
    </>
  )
}

export default UserCard