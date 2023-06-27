import { FC } from 'react';

const Tab: FC<{ icon: string; alt: string; children: string }> = ({
  icon,
  alt,
  children,
}) => {
  return (
    <div className="flex flex-row mt-4">
      <div>
        <img src={icon} alt={alt} />
      </div>
      <p className="ml-2">{children}</p>
    </div>
  );
};

export default Tab;
