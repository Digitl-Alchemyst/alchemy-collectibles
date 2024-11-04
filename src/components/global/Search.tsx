import React from 'react'
import Form from 'next/form'
import { Input } from '../ui/input'
import { Label } from '../ui/label'


const Search = () => {
  return (
    <div>
        <Form
        action='/search'
        className='w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0'
        >
            <Label htmlFor='search' />
            <Input type='text' name='query' placeholder='Search...' />
        </Form>
    </div>
  )
}

export default Search