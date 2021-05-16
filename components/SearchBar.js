import { Input } from 'antd';
const { Search } = Input;

export default function SearchBar({ search }) {
  //props: {search: Function}

  return (
    <div className="container">
      <h1>Welcome!</h1>
      <Search
        placeholder="Search database"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={search}
      />
      <style jsx>{`
        .container {
          height: 30vh;
          display: flex;
          flex-direction: column;
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
