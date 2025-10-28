import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
  id: 1337,
  name: '🍌 Banana',
  color: 'yellow',
},
{
  id: 1316,
  name: '🍌 kiw',
  color: 'green',
},
{
  id: 1325,
  name: '🍌 apple',
  color: 'red',
},
{
  id: 1344,
  name: '🍌 zitrone',
  color: 'yellow',
},
{
  id: 1363,
  name: '🍌 orange',
  color: 'orange',
},
  ];

  const fruitsLi = fruits.map((fruit) => {
  return (
<Card key={fruit.id}
      /* name="🍌 banana" */
      id={fruit.id}
      name={fruit.name}/>
    );
  }); 

return (
<div className="app">
{fruitsLi}
</div>
);
}
