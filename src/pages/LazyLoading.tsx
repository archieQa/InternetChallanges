import { lazy , Suspense} from 'react'

const LazyLoading = () => {

    const MyComponent = lazy(() => import("./LazyComponent"))
  return (
    <div className='pt-9'>
      <Suspense fallback={<div>...Loading</div> }>
        <MyComponent />
      </Suspense>
    </div>
  )
}

export default LazyLoading
