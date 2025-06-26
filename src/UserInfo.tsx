export interface UserInfo {
    name: string;
    country: string;
    email: string;
  }
  
export const displayUserInfos = (userInfo: UserInfo) => {

    return (
        <div>
            <h1>User Info :</h1>
            <div>
                <ul>
                    <li>Name : { userInfo.name } </li>
                    <li>Country : { userInfo.country }</li>
                    <li>Email : { userInfo.email }</li>
                </ul>
            </div>
        </div>
    )
}

