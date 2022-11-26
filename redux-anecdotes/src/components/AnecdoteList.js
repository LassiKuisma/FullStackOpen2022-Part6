import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ content, votes, handleClick }) => {
    return (
        <div>
            <div>
                {content}
            </div>
            <div>
                has {votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => state.anecdotes)

    const filter = useSelector(state => state.filter.filter)
    const anecdotesFiltered = filter === null
        ? anecdotes
        : anecdotes.filter(anecdote => {
            const contentLower = anecdote.content.toLowerCase()
            const filterLower = filter.toLowerCase()

            return contentLower.includes(filterLower)
        })

    const anecdotesSorted = anecdotesFiltered.slice().sort((a, b) => b.votes - a.votes)

    return (
        <div>
            {anecdotesSorted.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    content={anecdote.content}
                    votes={anecdote.votes}
                    handleClick={() => {
                        dispatch(voteAnecdote(anecdote))
                        dispatch(setNotification(`You voted '${anecdote.content}'`, 10))
                    }
                    }
                />
            )}
        </div>
    )
}

export default AnecdoteList
