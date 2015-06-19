from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

def page_this(query_set, page, items_per_page): #members should be renamed "model"
    paginator = Paginator(query_set, items_per_page)
    try:
        members = paginator.page(page)
        return members
    except (PageNotAnInteger, EmptyPage):
        return []