import { ChangeEvent } from "react";

interface IProps {
  checkEmitter: (e: ChangeEvent) => void;
  emitValue: boolean;
}
export const ButtonToggle = ({ checkEmitter, emitValue }: IProps) => {
  return (
    <div className="flex items-center justify-center h-fit w-fit">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            checked={emitValue}
            onChange={checkEmitter}
            type="checkbox"
            id="toggle"
            className="sr-only"
          />

          <div className="block w-10 h-5 rounded-full bg-gray-white"></div>

          <div className="absolute w-3 h-3 transition bg-white rounded-full dot left-1 top-1"></div>
        </div>
      </label>
    </div>
  );
};
