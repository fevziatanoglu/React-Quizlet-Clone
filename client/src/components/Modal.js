import { AiOutlineClose } from "react-icons/ai"

export default function Modal({ isOpen, onClose, children, title }) {
  if (!isOpen) return null;

  return (



    <>
      {/* make */}
      <div className="
  flex
  overflow-x-hidden
  overflow-y-auto
  justify-center
  items-center
  fixed
  inset-0
  outline-none
  focus:outline-none
  z-50
  bg-neutral-800
  bg-opacity-70             
  ">
        <div className=" 
          relative 
          w-full
          h-full
          lg:w-2/5
          lg:h-auto
          lg:max-w-3xl
          mx-auto
          my-6
          p-2
          ">
          <div className="
              bg-blue-500
              h-full
              lg:h-auto
              border-0
              rounded-xl
              relative
              flex
              flex-col
              w-full
              outline-none
              ">
            {/* header */}
            <div className="
                  flex
                  items-center
                  justify-between
                  p-5
                  ">

              <h2 className="text-2xl font-semibold text-white">{title}</h2>

              <button
                onClick={onClose}
                className="
                      hover:opacity-70
                      p-2
                      "
              >
                <AiOutlineClose size={20} color="white" />
              </button>
            </div>

            {/* body */}

            <div className="relative p-10 flex-auto">
              {children}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

