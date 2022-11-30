import React, { useState, Dispatch, SetStateAction } from 'react'

interface IProps {
   user: UserInputState
   setUser: Dispatch<SetStateAction<UserInputState>>
}

const Travellers = ({ user, setUser }: IProps): JSX.Element => {
   const [hasAddTravellers, sethasAddTravellers] = useState<boolean>(false)
   const totalTravellers = user.adult + user.child

   return (
      <div className="relative">
         <label className="flex flex-col text-md" htmlFor="traveller">
            Travellers
            <input
               type="button"
               value={`${totalTravellers} Adult, Economy`}
               className="border-2 rounded-sm py-3 px-5 text-md font-normal cursor-pointer"
               onClick={() => sethasAddTravellers(!hasAddTravellers)}
            />
         </label>
         {hasAddTravellers && (
            <div className="flex flex-col gap-4 border-2 drop-shadow-sm py-3 px-2 absolute w-44 right-0 top-24">
               <div className="flex items-center gap-3">
                  <button
                     type="button"
                     className="py-1 px-2 border-2 rounded-sm"
                     onClick={() => setUser({ ...user, adult: user.adult >= 2 ? user.adult - 1 : user.adult })}
                  >
                     -
                  </button>
                  <p className="w-2 text-center">{user.adult}</p>
                  <button
                     type="button"
                     className="py-1 px-2 border-2 rounded-sm"
                     onClick={() => setUser({ ...user, adult: user.adult + 1 })}
                  >
                     +
                  </button>
                  <p>Adults</p>
               </div>
               <div className="flex items-center gap-3 ">
                  <button
                     type="button"
                     className="py-1 px-2 border-2 rounded-sm"
                     onClick={() => setUser({ ...user, child: user.child >= 1 ? user.child - 1 : user.child })}
                  >
                     -
                  </button>
                  <p className="w-2 text-center">{user.child}</p>
                  <button
                     type="button"
                     className="py-1 px-2 border-2 rounded-sm "
                     onClick={() => setUser({ ...user, child: user.child + 1 })}
                  >
                     +
                  </button>
                  <p>Children</p>
               </div>
            </div>
         )}
      </div>
   )
}

export default Travellers
