// next
import Image from "next/image";

import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";

import { common } from "../../constants";

import { formatDate } from "../../utils";

const Certificate = ({
  id,
  image,
  name,
  issued,
}: {
  id: string;
  image: string;
  name: string;
  issued: any;
}) => {
  return (
    <div className="flex-col justify-center max-w-3xl">
      <div className="shadow-xl">
        <Image
          src={image || common.noImage}
          alt="certificate image"
          width={800}
          height={500}
          objectFit="contain"
          // layout="responsive"
        />
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2">
          <UserCircleIcon className="w-10 h-10 text-gray-600" />
          <div>
            <h1 className="font-bold">{name}</h1>
            <h5 className="text-gray-500 text-sm">
              Issued On:
              <span className="text-black">{formatDate(issued)}</span>
            </h5>
          </div>
        </div>

        <h1 className="font-bold text-blue-600 text-xl tracking-wide">{id}</h1>
      </div>
    </div>
  );
};

export default Certificate;
