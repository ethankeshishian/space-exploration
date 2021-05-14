import { Input } from 'antd';

const { Search } = Input;

export default function SearchBar() {
  const onSearch = () => {};
  return (
    <div className="container">
      <Search
        placeholder="Search database"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <style jsx>{`
        .container {
          height: 30vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url('https://www.pbs.org/wgbh/nova/media/images/shutterstock_1041249343.width-800.jpg');
          background-position: 0% 50%;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 5%;
        }
      `}</style>
    </div>
  );
}
