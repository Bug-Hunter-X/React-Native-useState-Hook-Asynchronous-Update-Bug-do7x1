import React, {useState} from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      console.log('Count incremented:', newCount); // Correct updated value
      return newCount;
    });
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
};

export default MyComponent;