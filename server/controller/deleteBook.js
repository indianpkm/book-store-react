import BookModel from "../modal/BookModel.js"

export const deleteBook = async (req, res) => {
    const { id } = req.params;
    
    try {
        const deletedBook = await BookModel.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.json({ message: 'Book deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}
