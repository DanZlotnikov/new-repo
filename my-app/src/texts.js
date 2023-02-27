import store from './redux/store';

const en = {
    general: {
        save: 'Save',
        upload: 'Upload',
        fileName: 'File name',
        add: 'Add',
        welcome: 'Welcome',
        signInExplanation: 'Sign in using one of your social media accounts',
        createAccount: 'Create account',
        comingSoon: 'Coming soon...',
        continue: 'Continue',
        delete: 'Delete',
        edit: 'Edit',
        areYouSure: 'Are you sure?',
        yes: 'Yes',
        no: 'No',
        searchTopic: 'Search a Topic'
    },
    newTopic: {
        newTopicInputPlaceholder: 'Create a new topic',
        create: 'Create'
    },
    discussions: {
        commentEditHint: '[Editing]',
        commentEmptyHint: '[Cannot be Empty]',
        newCommentPlaceholder: 'Start a discussion...',
        newSubcommentPlaceholder: 'Add a comment...',
        seeAllDiscussions: 'See all discussions',
        hideDiscussions: 'Hide discussions',
        openComments: 'Open comments'
    },
    knowledge: {
        itemListHeaderTitle: 'title',
        itemListHeaderPublished: 'published',
        uploadItem: 'Add a Reference',
        itemUploadModal: {
            header: 'New Reference',
            title: 'Title',
            originalAuthors: 'Original Authors',
            publishDate: 'Publish Date',
            modalFieldsError: 'Fill out all the fields',
        },
    },
    popular: {
        addItem: 'Add Item',
        itemUploadModal: {
            header: 'New Item',
            url: 'URL',
        },
    },
    tutorial: {
        0: 'Welcome! This is a quick tutorial just to get you started...',
        1: 'Here you can create new topics for people to discuss :)',
        2: 'This is where you upload knowledge files to your topic',
        3: 'And here you can upload popular items',
        4: 'Click here to create it!',
        5: 'Here you can explore other topics',
        6: 'Feel free to discuss!',
        7: 'Click here to view knowledge items. Or add some!',
        8: 'And of course scroll & upload popular items ;)',
        9: 'Enjoy yourself!'
    }
}

const he = {
    general: {
        save: 'שמור',
        upload: 'העלאה',
        fileName: 'שם קובץ',
        add: 'הוספה',
        welcome: 'ברוכים הבאים',
        signInExplanation: 'ניתן להתחבר באמצעות אחד החשבונות החברתיים שלכם',
        createAccount: 'יצירת חשבון',
        comingSoon: 'בקרוב...',
        continue: 'המשך',
        delete: 'מחק',
        edit: 'ערוך',
        areYouSure: 'מאשר/ת מחיקה?',
        yes: 'כן',
        no: 'לא',
        searchTopic: 'חפש נושא'
    },
    newTopic: {
        newTopicInputPlaceholder: 'צור/י נושא חדש',
        create: 'יצירה'
    },
    discussions: {
        commentEditHint: '[עריכה]',
        commentEmptyHint: '[לא יכול להיות ריק]',
        newCommentPlaceholder: 'התחל/י דיון...',
        newSubcommentPlaceholder: 'הוסף/י תגובה...',
        seeAllDiscussions: 'פתיחת כל הדיונים',
        hideDiscussions: 'הסתרת דיונים',
        openComments: 'פתיחת תגובות'
    },
    knowledge: {
        itemListHeaderTitle: 'כותרת',
        itemListHeaderPublished: 'פורסם',
        uploadItem: 'הוספת רפרנס',
        itemUploadModal: {
            header: 'רפרנס חדש',
            title: 'כותרת',
            originalAuthors: 'מחברים מקוריים',
            publishDate: 'תאריך פרסום',
            modalFieldsError: 'מלא/י את כל השדות',
        },
    },
    popular: {
        addItem: 'הוספת פריט',
        itemUploadModal: {
            header: 'פריט חדש',
            url: 'כתובת URL',
        },
    },
    tutorial: {
        0: 'ברוכים הבאים! הנה מדריך קצר שיעזור לכם להתחיל.',
        1: 'כאן ניתן לפרסם נושאים חדשים לדיון :)',
        2: 'פה מוסיפים פריטי ידע לנושא שלכם.',
        3: 'וכאן לוחצים על מנת להוסיף פריטים פופולריים',
        4: 'לחצו כאן כדי ליצור את הנושא!',
        5: 'הנה נושאים שפורסמו על ידי משתמשים אחרים',
        6: 'תרגישו חופשיים לדון!',
        7: 'לחצו כאן על מנת לראות פריטי ידע קיימים. או להוסיף משלכם!',
        8: 'וכמובן לגלוש באזור הפופולרי ;)',
        9: 'תהנו!'
    }
}

const texts = () => {
    let language = store.getState().authReducer.currentUser.language;
    switch (language) {
        case 'en':
            return en;
        case 'he':
            return he
        default:
            return he;
    }
};

export default texts;

